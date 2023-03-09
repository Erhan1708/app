import { useState, useEffect, useRef } from "react"
import { list } from "../constants"

const Sort = ({ sortType, setSortType }) => {
   const [open, setOpen] = useState(false);
   const sortRef = useRef();

   const toggleVisiblePopup = () => {
         setOpen(!open)
   };

   const onSelectItem = (item) => {
      setSortType(item)
      setOpen(false)
   }

  return (
     <section ref={sortRef} className="sort_products">
        <span>
           Сортировать по:
        </span>
        <b onClick={toggleVisiblePopup}>{sortType.name}</b>
        {open &&
           <ul>
           {list && list.map((item) => (
              <li
                 key={item.id}
                 onClick={() => onSelectItem(item)}
                 className={sortType.sortProperty === item.sortProperty ? "active" : ""}>
                 {item.name}
              </li>
           ))}
        </ul>
        }
        
     </section>
  )
}

export default Sort