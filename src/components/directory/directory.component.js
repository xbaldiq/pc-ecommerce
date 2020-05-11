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
        // size: 'large',
      },
      {
        title: 'Processor',
        imageUrl:
          'https://images.anandtech.com/doci/14173/intel_core_cpu_coffee_678_678x452.jpg',
        id: 2,
        // size: 'large',
      },
      {
        title: 'Motherboard',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/MicroATX_Motherboard_with_AMD_Athlon_Processor_2_Digon3.jpg/220px-MicroATX_Motherboard_with_AMD_Athlon_Processor_2_Digon3.jpg',
        id: 3,
        // size: 'large',
      },
      {
        title: 'Ram Module',
        imageUrl:
          'https://images.anandtech.com/doci/12112/crucial_lrdimm_678_678x452.jpg',
        id: 4,
        size: 'large',
      },
      {
        title: 'Power Supply',
        imageUrl:
          'https://images.anandtech.com/doci/15579/220-B5-0850-V1_XL_678-1_678x291.jpg',
        id: 5,
        size: 'large',
      },
    ],
  };

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
