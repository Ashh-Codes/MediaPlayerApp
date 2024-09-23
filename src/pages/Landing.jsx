import React from 'react'
import { Link } from 'react-router-dom'
import imageMedia from  '../assets/dj-mix.gif'
import { Card } from 'react-bootstrap'
import imageMusic from '../assets/unnamed.jpg'
import imagePlay from '../assets/OIP.jpeg'
import musicplay from '../assets/music.jpeg'


const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}}  className='container'>
      <div className="row align-items-center">
        <div className="col-lg-5">
            <h3>Welcom to <span className='text-warning'>Media Player</span></h3>
            <p style={{textAlign:'justify'}} className='mt-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sequi, beatae tempora fugit repellat iure soluta sint vel dignissimos alias ex enim minima molestias iste, expedita consequuntur quidem reiciendis! Deleniti. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <Link to={'/home'} className='btn btn-info'>Get Started</Link>

        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
        <img src={imageMedia} className='ms-5' alt="" />
        </div>

      </div>

      <div className="my-5">
        <h3 className='text-center'>Features</h3>
        <div className="row mt-5">
            <div className="col-lg-4">
            <Card  className='p-2'  style={{ width: '20rem',height:'410px' }}>
                    <Card.Img variant="top" style={{height:'100%'}} src={imageMusic} />
                    <Card.Body>
                        <Card.Title>Managing Videos</Card.Title>
                        <Card.Text>
                        Some music contents for of your taste to play
                        </Card.Text>
                       
                    </Card.Body>
            </Card>
            </div>
            <div className="col-lg-4">
            <Card  className='p-2' style={{ width: '20rem',height:'410px'  }}>
                    <Card.Img variant="top" style={{height:'100%'}} src={imagePlay} />
                    <Card.Body>
                        <Card.Title>Categorising videos</Card.Title>
                        <Card.Text>
                        Some music contents for of your taste to play
                        </Card.Text>
                       
                    </Card.Body>
            </Card>
            </div>
            <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem',height:'410px'  }}>
                    <Card.Img variant="top" style={{height:'100%'}} src={musicplay} />
                    <Card.Body>
                        <Card.Title>Relevence</Card.Title>
                        <Card.Text>
                       Some music contents for of your taste to play
                        </Card.Text>
                       
                    </Card.Body>
            </Card>
            </div>
        </div>
      </div>

    
        <div className="row my-5 border rounded p-5">
            <div className="col-lg-5">
                <h3 className='text-warning'>Media Player Galllery</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur eum atque dolorum esse veniam culpa eligendi commodi ipsa et, harum labore minus accusamus eos quo hic corporis. Praesentium, odit commodi?</p>
            </div>
            <div className="col-lg">

            </div>
            <div className="col-lg-6">
            <iframe width="400" height="300" src="https://www.youtube.com/embed/ApXoWvfEYVU" title="Post Malone, Swae Lee - Sunflower (Spider-Man: Into the Spider-Verse) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
   

    </div>
    </div>
  )
}

export default Landing

