import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {
  const scan = useSelector((state) => state.products.product)
  const isScanning = useSelector((state) => state.ui.isScanning)

  return (
    <div>
      {!isScanning && scan.status === 0 && (
        <div className='not-found'>
          <p>Oh no, I couldn't find this product.</p>
          <p>
            If you have the time, please visit{' '}
            <a
              href='https://world.openfoodfacts.org/'
              target='_blank'
              rel='noopener noreferrer'>
              Open Food Facts
            </a>{' '}
            and add the product for others to find!
          </p>
        </div>
      )}

      {!isScanning && scan.status === 1 && (
        <div className='product-info'>
          {scan.product.image_url ? (
            <img
              className='product-image'
              src={scan.product.image_url}
              alt='product'
            />
          ) : (
            <div className='no-image'>
              <p>Image</p>
              <p>not</p>
              <p>found</p>
            </div>
          )}

          <div className='product-text'>
            <h3>{scan.product.product_name}</h3>

            {scan.product.packaging ? (
              <h2>
                Please sort this as{''} {scan.product.packaging.toLowerCase()}
              </h2>
            ) : (
              <p>
                Oh no, this product doesn't have any sorting advice. Ask a
                friend for help!
              </p>
            )}
          </div>
        </div>
      )}
      {<></>}
    </div>
  )
}
