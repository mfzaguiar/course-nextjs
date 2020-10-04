import { useState } from 'react';
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

const AddToCartModal = dynamic(
    () => import('@/components/AddToCartModal'),
    {loading: () => <p>Loading...</p>, ssr: false}
    )

export default function Product(){
    const router = useRouter();
    const [isAddToCartModalVisable,setIsAddToCartModalVisable] = useState(false)

    function handleAddToCart(){
        setIsAddToCartModalVisable(true)
    }

    return(
        <div>
            <h1>{router.query.slug}</h1>
            <button onClick={handleAddToCart}>Add to cart</button>
            {isAddToCartModalVisable && <AddToCartModal /> }
        </div>
    )
}
