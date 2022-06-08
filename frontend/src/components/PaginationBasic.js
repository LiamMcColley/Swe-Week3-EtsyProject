import React from 'react'
import { Pagination } from 'react-bootstrap';
import "../App.css";



function PaginationBasic({bookPerPage,totalBooks,paginate}) {
    const pageNumber = [];
    let active = 0;
    for(let i = 1; i<=Math.ceil(totalBooks/bookPerPage);i++){
        pageNumber.push(i);

    }

    return (
        <div className="pagination--container">
            <Pagination>
                {pageNumber.map((num)=>(
                    <Pagination.Item  active={num === active} onClick={()=>paginate(num)}>
                        {num}
                    </Pagination.Item>
                    ))

                }
           </Pagination>
            
        </div>
    )
}

export default PaginationBasic
