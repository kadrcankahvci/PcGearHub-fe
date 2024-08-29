import React from 'react'

const TableComponent = (products) => {
  return ( <>
     <TableHeaderComponent/>
     <TableBodyComponent products={products}/>
  </>
    
  )
}

export default TableComponent;


 
export const TableHeaderComponent= () => { // devam et buraya 
  return (<thead><tr><th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th> {/* Yeni sütun */}
              <th>Actions</th>
            </tr></thead>)
}

 
 export const  TableBodyComponent= (products)=> {
   return (
     
     <tbody>
            {products.map((products) => (
              <tr key={product.productId}>
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.productName} style={{ width: '50px', height: '50px' }} />
                  ) : (
                    'No image'
                  )}
                </td>
                <td>
                  <Button
                    variant="warning"
                    className="me-2"
                    onClick={() => handleShowModal(product)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteProduct(product.productId)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
    
   )
 }
 
