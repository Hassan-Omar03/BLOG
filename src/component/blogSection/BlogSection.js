import Card from "../card/Card"
import {blogsData, cardContent} from "../constant/blog"
import {tags} from '../constant/blog'
import SideCard from "../sideCard/SideCard"
import TopicItems from "../topisItems/TopicItems"
import Button from "../button/Button"
export default function BlogSection() {
    return (

        <div className="main">

            <div className="container">



                <div className="blog">

                    <h2 className="h2">Latest Blog Post</h2>

                    <div className="blog-card-group">
                        {blogsData?.map((item,index)=>{
                            return <Card key={index} data ={item}/>
                        })}
                
    
               
                    </div>

                <Button title ="Load More"/>

                </div>


                <div className="aside">

                    <div className="topics">

                        <h2 className="h2">Topics</h2>

                        
                        <TopicItems title="DataBase"/>
                        <TopicItems title="Accessiilty"/>
                        <TopicItems title="Web Performance"/>

                    </div>

                    <div className="tags">

                        <h2 className="h2">Tags</h2>

                        <div className="wrapper">
                            {tags?.map((item,index)=>{
                                return <button className="hashtag">{item}</button>
                            })}

                           
                        </div>

                    </div>
                    {cardContent?.map((item,index)=>{
                        return <SideCard key={index} data={item}/>
                    })}
                   

                    
                </div>

            </div>

        </div>
    )
}