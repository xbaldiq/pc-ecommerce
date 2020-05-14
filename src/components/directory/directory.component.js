import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends Component {
  state = {
    sections: [
      {
        title: 'GPU Card',
        imageUrl:
          'https://images.anandtech.com/doci/13735/RTX_2080ti_Car_678x452.jpg',
        id: 1,
        linkUrl: 'gpu',
        // size: 'large',
      },
      {
        title: 'Processor',
        imageUrl:
          'https://asset.kompas.com/crops/1g1geS9UpCTA7ojlgxcO2Et1RPI=/0x0:1000x667/750x500/data/photo/2018/04/16/784413158.jpg',
        id: 2,
        linkUrl: 'processor',
        // size: 'large',
      },
      {
        title: 'Motherboard',
        imageUrl:
          'https://www.pcgamesn.com/wp-content/uploads/2018/10/Best-gaming-motherboard-Asus-ROG-Strix-Z390-E-Gaming.jpg',
        id: 3,
        linkUrl: 'motherboard',
        // size: 'large',
      },
      {
        title: 'Ram Module',
        imageUrl:
          'https://images.anandtech.com/doci/12112/crucial_lrdimm_678_678x452.jpg',
        id: 4,
        size: 'large',
        linkUrl: 'ram',
      },
      {
        title: 'Power Supply',
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/71r8vEObYJL._AC_SX425_.jpg',
        id: 5,
        size: 'large',
        linkUrl: 'psu',
      },
    ],
  };

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItem
            key={id}
            {...otherProps}
            // history={this.props.history}
            // title={title}
            // imageUrl={imageUrl}
            // size={size}
            // history={this.props.history}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
