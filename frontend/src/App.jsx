// React + third party
import React, { useState } from "react";
import { useAsync } from "react-async";
import { Container, Footer } from "rbx";

// Downloader service
import getData from "./services/DataDownloader";

// Components
import GitEmojiNavbar from "./components/Containers/GitEmojiNavbar";
import GitEmojiHero from "./components/Containers/GitEmojiHero";
import Loading from "./components/TableComponents/Loading";
import Error from "./components/TableComponents/Error";
import Table from "./components/Containers/Table";

// Styling
import "./assets/App.scss";
import "./assets/spacing.scss";

const App = () => {
  let { data, error, isLoading } = useAsync({ promiseFn: getData });

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = event => setInputValue(event.target.value);

  // Filtar de acordo com o inputValue
  if (data != null) {
    data = Object.fromEntries(
      Object.entries(data)
        .map(([categoryName, subCategory]) => [
          categoryName,
          Object.fromEntries(
            Object.entries(subCategory)
              .map(([subCategoryName, emojis]) => [
                subCategoryName,
                emojis.filter(emoji =>
                  emoji.some(emojiData =>
                    emojiData.emojiId.includes(inputValue)
                  )
                )
              ])
              .filter(([_subCategoryName, emojis]) => emojis.length > 0)
          )
        ])
        .filter(
          ([_categoryName, subCategory]) => Object.keys(subCategory).length > 0
        )
    );
  }

  const containerBox =
    (isLoading && <Loading />) ||
    (error && <Error error={error} />) ||
    (data && <Table data={data} />);

  return (
    <>
      <GitEmojiNavbar />
      <GitEmojiHero
        inputValue={inputValue}
        handleInputChange={handleInputChange}
      />
      <Container fluid> {containerBox} </Container>
      <Footer />
    </>
  );
};

export default App;

// For columns on different sizes
/*

is-three-quarters-mobile
is-two-thirds-tablet
is-half-desktop
is-one-third-widescreen
is-one-quarter-fullhd

*/
