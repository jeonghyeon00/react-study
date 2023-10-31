import Comment from "./Comment";

const comments = [
  {
    name: "조인성",
    comment: "조인성입니다 무빙 재밌게 봐주세요~",
    imgSrc:
      "https://entertainimg.kbsmedia.co.kr/cms/uploads/CONTENTS_20210727154109_bd52230a771198ed1eebf65f61ebccdd.jpg",
  },
  {
    name: "한효주",
    comment: "한효주입니다 무빙 재밌어요 ㅎㅎ",
    imgSrc:
      "https://i.namu.wiki/i/BBHDIQHQag753oRoERauIANFOWrQwjKe7ah3_p_CXbh0hQXxJJjsVsh9LUOfbgD_pW9JSlBeWY1OqaVLLGQBww.webp",
  },
  {
    name: "이정하",
    comment: "이정하입니다 하늘 나는게 재밌어요",
    imgSrc:
      "https://i.namu.wiki/i/g-ISN_ysoLrjcQupr9Gfj-9n28dDL0G6HGrsrQ5qqtaNQ49_JTAnYUcFqnCZtzr8bRcq0EuNx_upm_iR4PwQsA.webp",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((item) => {
        return (
          <Comment
            name={item.name}
            comment={item.comment}
            imgSrc={item.imgSrc}
          />
        );
      })}
    </div>
  );
}

// function CommentList(props) {
//   return (
//     <div>
//       {comments.map((comment) => {
//         return (
//           <Comment
//             name={comment.name}
//             comment={comment.comment}
//             imgSrc={comment.imgSrc}
//           />
//         );
//       })}
//     </div>
//   );
// }

export default CommentList;
