import { Container, Grid, Tab, Item, MenuItem} from "semantic-ui-react";
import Topics from "../compoments/Topic";
import firebase from "../utils/firebase";
import React from "react";
import { useParams } from "react-router-dom";
// import "firebase/firestore";
import Version from "./Version";

function Postpages() {
  const [postIds, setPostIds] = React.useState([]);
  const { postId } = useParams();

  const [posts, setPosts] = React.useState([]);
  // React.useEffect(() => {
  //   firebase
  //     .firestore()
  //     .collection("posts")
  //     .doc(postId)
  //     .collection("versions")
  //     .get()
  //     .then((collectionSnapshot) => {
  //       const ids = [];
  //       const data = collectionSnapshot.docs.map((docSnapshot) => {
  //         const id = docSnapshot.id;
  //         ids.push(id);
  //         return { ...docSnapshot.data(), id };
  //       });
  //       setPostIds(ids);
  //       setPosts(data);
  //     });
  // }, []);

  React.useEffect(() => {

    // 根據postid抓取所又不同version的文章將其id存入postId導入Version.js
    // 從下面panes傳入
  }, []);

  const panes = [
    {
      menuItem: "Initial Post",
      render: () => (
        <Tab.Pane>
          <Version />
        </Tab.Pane>
      ),
    },
    // ...posts.map((post) => ({
    //   menuItem: post.cretedAt.toDate().toLocaleString([], {
    //     month: "short",
    //     day: "numeric",
    //     hour: "2-digit",
    //     minute: "2-digit",
    //   }),
    
    //顯示更改時間
  ...posts.map((post) => ({
      menuItem: post.cretedAt
  })),


      render: () => (
        <Tab.Pane key={post.id}>
          <Version versionId={post.id} />
        </Tab.Pane>
      ),
    })),
  ];

  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Topics />
          </Grid.Column>
          <Grid.Column width={13}>
            <Tab panes={panes} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default Postpages;