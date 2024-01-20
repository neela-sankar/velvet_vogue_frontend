import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className="categories">
        <div className="col">
            <div className="row">
                <img src="https://img.freepik.com/free-photo/fast-fashion-vs-slow-sustainable-fashion_23-2149133973.jpg" alt="sale" />
                <button>
                    <Link className='link' to="/products/7">Sale</Link>
                </button>
            </div>
            <div className="row">
            <img src="https://img.freepik.com/free-photo/cheerful-asian-girl-champion-rooting-smth-raising-hands-up-joyful-smiling-celebrating-winnin_1258-167210.jpg" alt="women" />
                <button>
                    <Link className='link' to="/products/6">Women</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="https://img.freepik.com/free-photo/fashion-design-studio-sewing-cutting-clothes-designer-clothes-manufacturing-craft-product_74952-2331.jpg?w=1060&t=st=1704970798~exp=1704971398~hmac=f2ad15e650bf764322212289c4a6e4ff7af78ae7c72304313430982ef79f3007" alt="season" />
                <button>
                    <Link className='link' to="/products/9">New Season</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://img.freepik.com/free-photo/portrait-handsome-stylish-hipster-lambersexual-model_158538-18005.jpg?w=900&t=st=1704970875~exp=1704971475~hmac=360432d22df4b7a83c55ebc20bdedb21a0eead752365eb44275d8268827f5c68" alt="men" />
                <button>
                    <Link className='link' to="/products/5">Men</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://img.freepik.com/free-photo/front-view-hand-wearing-gold-bracelet_23-2149836438.jpg?w=360&t=st=1704970930~exp=1704971530~hmac=49e22bfc97da736ccb26202c38a8b3f4af072255e3ef7a8e03644962d0a33012" alt="accessories" />
                <button>
                    <Link className='link' to="/products/10">Accessories</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src="https://img.freepik.com/free-photo/modern-blue-sports-shoe-design-close-up-fashionable-generated-by-ai_188544-19682.jpg?w=1060&t=st=1704971085~exp=1704971685~hmac=3c9222bea0e545724ba429fb7567454d9825fe154a097146f15b32211fd662ef" alt="shoes" />
                <button>
                    <Link className='link' to="/products/8">Shoes</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories