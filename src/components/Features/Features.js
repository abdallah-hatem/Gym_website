import React from 'react'
import Card from './Card'
import './Features.css'

function Features() {
    return (
        <div className='features-wrapper'>
            <h1>FEATURES</h1>
            <div id='FEATURES' className='features-cont'>
                <Card
                    img={'https://images.unsplash.com/photo-1590487988274-946a8635e5d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGd5bSUyMGVxdWlwbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}
                    header={'Weight Lifting'}
                />
                <Card
                    img={'https://media.istockphoto.com/photos/wide-angle-shot-of-a-fit-and-determined-asian-man-in-a-blue-tank-top-picture-id1370709908?b=1&k=20&m=1370709908&s=170667a&w=0&h=OiCSZfytpuvm-EVFezaeS-EoyicWZSy4iBnaLIttQc4='}
                    header={'Specific Muscle'}
                />
                <Card
                    img={'https://images.unsplash.com/photo-1597452573811-85e7383195a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmljZXBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}
                    header={'Flex Your Muscles'}
                />
                <Card
                    img={'https://images.unsplash.com/photo-1648201513697-5955e6dca845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyZGlvJTIwbWFjaGluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}
                    header={'Cardio Machines'}
                />
            </div>
        </div>
    )
}

export default Features