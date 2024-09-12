
export default function TopicItems(props) {
  return (
    
    <a href="#" className="topic-btn">
    <div className="icon-box">
        <ion-icon name="rocket-outline"></ion-icon>
    </div>

    <p>{props.title}</p>
</a>
  )
}
