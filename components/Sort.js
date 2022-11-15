import { useState, useEffect } from "react"
import { list } from "../constants"
const Sort = ({ value, onChangeSort }) => {
   const [open, setOpen] = useState(false);

   const toggleVisiblePopup = () => {
      setOpen(!open)
   };

   useEffect(() => {
      
   }, []);

  return (
     <section className="sort_products">
        <span>
           Сортировать по:
           <span onClick={toggleVisiblePopup}>По Умолчанию</span>
        </span>
        {open &&
           <ul>
           {list.map((item) => (
              <li
                 onClick={()=> onClickListIten(i)}
                 key={item.id}>
                 {item.name}
              </li>
           ))}
        </ul>
        }
        
     </section>
  )
}

export default Sort