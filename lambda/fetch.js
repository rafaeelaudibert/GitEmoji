const $ = require("cheerio");
const request = require("request");

/**
 * @typedef {string} EmojiLiteral
 * @returns {Promise<{ [githubEmojiId: string]: EmojiLiteral | [string] }>}
 */
async function getGithubEmojiIdMap() {  
  return Object.entries(await fetchJson("https://api.github.com/emojis",
                  {
                    headers: {
                      "User-Agent":
                        "https://github.com/ikatyang/emoji-cheat-sheet"
                    }
                  }
    )
  ).map(([id, url]) => {
    return {
      emojiId: id,
      emojiUrl: url,
      emojiLiteral: url.includes("/unicode/")
        ? getLast(url.split("/"))
            .split(".png")[0]
            .split("-")
            .map(codePointText =>
              String.fromCodePoint(Number.parseInt(codePointText, 16))
            )
            .join("")
        : [getLast(url.split("/")).split(".png")[0]] // github's custom emoji
    }
  })
}

async function getUnicodeEmojiCategoryIterator() {
  return getUnicodeEmojiCategoryIteratorFromHtmlText(
    await fetch("https://unicode.org/emoji/charts/full-emoji-list.html")
  );
}

function* getUnicodeEmojiCategoryIteratorFromHtmlText(htmlText) {
  const $html = $.load(htmlText).root();
  const $trs = $html
    .find("table")
    .children()
    .toArray();
  for (const $tr of $trs) {
    if ($tr.firstChild.tagName === "th") {
      if ($tr.firstChild.attribs.class === "bighead") {
        const value = $tr.firstChild.firstChild.firstChild.nodeValue;
        yield { type: "category", value };
      } else if ($tr.firstChild.attribs.class === "mediumhead") {
        const value = $tr.firstChild.firstChild.firstChild.nodeValue;
        yield { type: "subcategory", value };
      } else {
        // skip column titles
      }
    } else if ($tr.firstChild.tagName === "td") {
      if ($tr.children[4].attribs.class === "chars") {
        yield { type: "emoji", value: $tr.children[4].firstChild.nodeValue };
      } else {
        throw new Error(`Unexpected situation.`);
      }
    } else {
      throw new Error(
        `Unexpected tagName ${JSON.stringify($tr.firstChild.tagName)}`
      );
    }
  }
}

async function getCategorizeGithubEmojiIds() {
  const githubEmojiIdMap = await getGithubEmojiIdMap();

  const literalToIdMap = {};
  const specificEmoji = {};

  for (const emoji of githubEmojiIdMap) {
    const { emojiLiteral } = emoji

    if (Array.isArray(emojiLiteral)) {
      const [ uri ] = emojiLiteral;
      
      if (!specificEmoji[uri]) specificEmoji[uri] = []      
      specificEmoji[uri].push(emoji);
    } else {
      if (!literalToIdMap[emojiLiteral]) literalToIdMap[emojiLiteral] = []  
      literalToIdMap[emojiLiteral].push(emoji);
    }    
  }
  
  const categorizedEmojiIds = {};
  let categoryStack = [];
  for (const { type, value } of await getUnicodeEmojiCategoryIterator()) {
    switch (type) {
      case "category": {
        categoryStack = [] // Empty the stack

        const title = toTitleCase(value);
        categoryStack.push(title);
        categorizedEmojiIds[title] = {};

        break;
      }
      case "subcategory": {
        if (categoryStack.length > 1) categoryStack.pop();

        const title = toTitleCase(value);
        categoryStack.push(title);
        categorizedEmojiIds[categoryStack[0]][title] = [];

        break;
      }
      case "emoji": {
        const key = value.replace(/[\ufe00-\ufe0f\u200d]/g, "");
        if (key in literalToIdMap) {
          const githubEmojiIds = literalToIdMap[key];
          const [category, subcategory] = categoryStack;
          
          categorizedEmojiIds[category][subcategory].push(githubEmojiIds);
        }

        break;
      }
      default:
        throw new Error(`Unexpected type ${JSON.stringify(type)}`);
    }
  }

  for (const category of Object.keys(categorizedEmojiIds)) {
    const subCategorizedEmojiIds = categorizedEmojiIds[category];
    const subcategories = Object.keys(subCategorizedEmojiIds);

    for (const subcategory of subcategories) {
      if (subCategorizedEmojiIds[subcategory].length === 0) {
        delete subCategorizedEmojiIds[subcategory];
      }
    }

    if (Object.keys(subCategorizedEmojiIds).length === 0) {
      delete categorizedEmojiIds[category];
    }
  }

  if (Object.keys(specificEmoji).length) {
    categorizedEmojiIds["GitHub Custom Emoji"] = {
      "": Object.entries(specificEmoji).map(
        ([, v]) => v
      )
    };
  }

  return categorizedEmojiIds;
}

function toTitleCase(str) {
  return str
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .replace(/[a-zA-Z]+/g, word => word[0].toUpperCase() + word.slice(1));
}

function getLast(array) {
  return array[array.length - 1];
}

async function fetchJson(url, options = {}) {
  return JSON.parse(await fetch(url, options));
}

async function fetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    request.get({ url, ...options },
      (error, response, html) => {
        if (!error && response.statusCode === 200) {
          resolve(html);
        } else {
          reject(
            error
              ? error
              : `Unexpected response status code: ${response.statusCode}`
          );
        }
      }
    );
  });
}

module.exports = {
  getCategorizeGithubEmojiIds
};
