import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class App extends Component {

    constructor(props) {
        super(props)
        this.refToSliderBlock = React.createRef()
        this.state = {
            rightOffset: 0,
            sliderWidth: 0
        }
    }

    sliderItemWidth = 1130

    componentDidMount = () => {
        this.setState(() => {
            return { sliderWidth: this.sliderItemWidth * this.refToSliderBlock.current.childElementCount }
        })
    }

    prevSlide = () => {
        if (this.state.rightOffset <= 0) {
            this.setState(() => {
                return { rightOffset: this.state.sliderWidth - this.sliderItemWidth }
            })
        } else {
            this.setState((state) => {
                return { rightOffset: state.rightOffset - this.sliderItemWidth }
            })
        }
    }

    nextSlide = () => {
        if (this.state.rightOffset >= this.state.sliderWidth - this.sliderItemWidth) {
            this.setState(() => {
                return { rightOffset: 0 }
            })
        } else {
            this.setState((state) => {
                return { rightOffset: state.rightOffset + this.sliderItemWidth }
            })
        }
    }



    render() {
        return (
            <>
                <div className="slider">
                    <div className='slider-button-prev' onClick={ this.prevSlide }>&larr;</div>
                    <div className='slider-container'>
                        <div className='slider-block' ref={ this.refToSliderBlock } style={{ right: this.state.rightOffset, minWidth: this.state.sliderWidth }}>
                            <div className='slider-item'>
                                <h1>Слайд 1</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus qui tempore dolorem nobis veritatis! Perferendis placeat accusantium fugit fuga commodi dignissimos inventore magni adipisci, eum nihil dolores harum beatae rem a amet odio debitis veritatis mollitia ad molestias provident explicabo ut eaque! Numquam, quam blanditiis. Harum id ipsum reprehenderit voluptate minima nemo aut unde corrupti cumque. Perspiciatis qui aliquid quod doloribus sapiente illum quisquam ad id minus, quas magni ducimus consectetur laboriosam debitis saepe quasi consequatur at neque cupiditate nam, doloremque amet nisi facilis! Obcaecati repellendus iusto, labore voluptate odio quidem recusandae ipsum nobis aliquid delectus earum fugiat nemo commodi!</p>
                            </div>
                            <div className='slider-item'>
                                <h1>Слайд 2</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus qui tempore dolorem nobis veritatis! Perferendis placeat accusantium fugit fuga commodi dignissimos inventore magni adipisci, eum nihil dolores harum beatae rem a amet odio debitis veritatis mollitia ad molestias provident explicabo ut eaque! Numquam, quam blanditiis. Harum id ipsum reprehenderit voluptate minima nemo aut unde corrupti cumque. Perspiciatis qui aliquid quod doloribus sapiente illum quisquam ad id minus, quas magni ducimus consectetur laboriosam debitis saepe quasi consequatur at neque cupiditate nam, doloremque amet nisi facilis! Obcaecati repellendus iusto, labore voluptate odio quidem recusandae ipsum nobis aliquid delectus earum fugiat nemo commodi!</p>
                            </div>
                            <div className='slider-item'>
                                <h1>Слайд 3</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus qui tempore dolorem nobis veritatis! Perferendis placeat accusantium fugit fuga commodi dignissimos inventore magni adipisci, eum nihil dolores harum beatae rem a amet odio debitis veritatis mollitia ad molestias provident explicabo ut eaque! Numquam, quam blanditiis. Harum id ipsum reprehenderit voluptate minima nemo aut unde corrupti cumque. Perspiciatis qui aliquid quod doloribus sapiente illum quisquam ad id minus, quas magni ducimus consectetur laboriosam debitis saepe quasi consequatur at neque cupiditate nam, doloremque amet nisi facilis! Obcaecati repellendus iusto, labore voluptate odio quidem recusandae ipsum nobis aliquid delectus earum fugiat nemo commodi!</p>
                            </div>
                        </div>
                    </div>
                    <div className='slider-button-next' onClick={ this.nextSlide }>&rarr;</div>
                </div>
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.App')
)
