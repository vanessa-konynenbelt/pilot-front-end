import * as styles from './DetailCard.module.css'

const DetailCard = ({ comment, handleDeleteComment, locationDetails, user }) => {
  return ( 
    <>
      <tr>
        <td>{comment.content}</td>
        <td>{comment.owner.name}</td>
        {user.profile === comment.owner._id ?
          <td>
            <button 
              className={styles.btn}
              onClick={ ()=> handleDeleteComment(locationDetails, comment._id) }
            >
              X
            </button>
          </td>   
        :
          <td></td>
        }
      </tr> 
    </> 
  );
}
 
export default DetailCard;