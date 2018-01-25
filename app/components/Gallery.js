import React, {Component} from 'react'

class Gallery extends Component {
  render() {
    return (
      <div>
        {
          this.props.items.map((item, index) => {
            let {title, imageLinks, infoLink} = item.volumeInfo;
            let alternate_image = 'https://image.flaticon.com/icons/svg/8/8235.svg'
            return (
              <div className='book' key={index}>
                <a href={infoLink}>
                  <img src={imageLinks ? imageLinks.thumbnail : alternate_image }
                       alt= "BOOK IMAGE"
                       className="book image"
                   />
                  </a>
                <div className='book title'>
                  {title}
                </div>
              </div>
            ) 
          })
        }
      </div>
    )
  }
}

export default Gallery
