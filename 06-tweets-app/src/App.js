import React, { useState, useEffect } from "react";
import { Container, Snackbar } from "@material-ui/core"
import Header from './components/Header';
import SendTweet from './components/SendTweet';
import ListTweets from './components/ListTweets';

function App() {

  const [toastProps, setToastProps] = useState({
    open: false,
    text: null
  });
  const [allTweets, setAllTweets] = useState([]);
  const [reloadTweets, setReloadTweets] = useState(false);

  useEffect(()=>{
    const AllTweetsStorage = localStorage.getItem("tweets-lt")
    const allTweetsArray = JSON.parse(AllTweetsStorage);
    setAllTweets(allTweetsArray);
  },[]);

  const deleteTweet = index => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem("tweet-simulator", JSON.stringify(allTweets));
    setReloadTweets(true);
  };

  //console.log(allTweets)

  return (
    <Container className="tweet-simulator" maxWidth={false}>
      <Header />
      <SendTweet setToastProps={setToastProps} allTweets={allTweets} />
      <ListTweets allTweets={allTweets} deleteTweet={deleteTweet} />
      <Snackbar
        anchorOrigin = {{
          vertical: "top",
          horizontal: "right"
        }}
        open={toastProps.open}
        autoHideDuration={1000}
        message={<span id="message-id">{toastProps.text}</span>}
      />
    </Container>
  );
}

export default App;
