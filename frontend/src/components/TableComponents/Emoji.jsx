import React, { useState } from "react";
import { Box, Column, Button, Generic } from "rbx";
import { LazyLoadImage } from "react-lazy-load-image-component";

const copyToClipboard = (data, emojiIdx, setClicked, setError) =>
  navigator.permissions.query({ name: "clipboard-write" }).then(result => {
    if (result.state === "granted" || result.state === "prompt") {
      navigator.clipboard.writeText(data).then(
        function() {
          setClicked(emojiIdx);
          setTimeout(() => setClicked(null), 2000);
        },
        function() {
          setError(true);
          setTimeout(() => setError(false), 4000);
        }
      );
    } else {
      setError(true);
      setTimeout(() => setError(false), 4000);
    }
  });

// We are actually receiving a list of emojis to display on each emoji
const Emoji = ({ data: emojis }) => {
  const emojiNames = emojis.map(emoji => `:${emoji.emojiId}:`);
  const emojiPhotoUrl = emojis[0].emojiUrl;
  const emojiLiteral = emojis[0].emojiLiteral;

  const [clicked, setClicked] = useState(null);
  const [error, setError] = useState(null);

  return (
    <Column className={"is-6-mobile is-4-tablet is-3-fullhd is-2-desktop"}>
      <Box className="has-text-centered has-padding-bottom-xsm has-padding-top-xsm has-padding-right-xsm has-padding-left-xsm">
        {
          <LazyLoadImage
            src={emojiPhotoUrl}
            alt={emojiLiteral}
            effect="opacity"
            height={50}
            width={50}
          />
        }
        <br />
        {emojiNames.map((emojiName, emojiIdx) => (
          <Button
            key={emojiName}
            as="div"
            name={`Click to copy ${emojiName}`}
            color={clicked === emojiIdx ? "success" : "light"}
            className="emojiName has-margin-bottom-xs"
            onClick={() =>
              copyToClipboard(emojiName, emojiIdx, setClicked, setError)
            }
            onTouchStart={() =>
              copyToClipboard(emojiName, emojiIdx, setClicked, setError)
            }
          >
            {emojiName}
          </Button>
        ))}
        {error && (
          <Generic as="small" className="has-text-danger">
            Ocorreu um erro ao copiar para seu clipboard.
          </Generic>
        )}
      </Box>
    </Column>
  );
};

export default Emoji;
