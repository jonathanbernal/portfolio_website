import {Icon as IconifyIcon} from '@iconify/react';

function TechnologyList({ list }) {
  return (
    <div className="technology_list">
      {
        list.map(iconName => (
          <IconifyIcon key={iconName} icon={iconName}/>
        ))
      }
    </div>
  )
}

export default TechnologyList;