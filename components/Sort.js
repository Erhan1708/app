import { useState, useEffect, useRef } from "react"
import { list } from "../constants"

const Sort = ({ value, onChangeSort }) => {
   const [open, setOpen] = useState(false);
   const sortRef = useRef();

   const toggleVisiblePopup = () => {
      setOpen(!open)
   };

   const handleOutsideClick = (e) => {
      if (!e.path.includes(sortRef.current)) {
         setOpen(false)
      }
   }

   const onSelectItem = (i) => {
      onChangeSort(i)
      setOpen(false)
   }

   useEffect(() => {
      document.body.addEventListener("click", handleOutsideClick)
      console.log(sortRef.current );
   }, []);

  return (
     <section ref={sortRef} className="sort_products">
        <span>
           Сортировать по:
        </span>
        <b onClick={toggleVisiblePopup}>{value.name}</b>
        {open &&
           <ul>
           {list && list.map((obj, i) => (
              <li
                 key={i}
                 onClick={()=> onSelectItem(obj)}
                 className={value.sortProperty === obj.sortProperty ? "active" : ""}>
                 {obj.name}
              </li>
           ))}
        </ul>
        }
        
     </section>
  )
}

export default Sort