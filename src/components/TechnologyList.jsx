import {Icon as IconifyIcon} from '@iconify/react';

function TechnologyList({ list }) {
  return (
    <div className="technology_list">
      {
        list.map(icon => (
          <div className="technology_item" key={icon.name}>
            <IconifyIcon icon={icon.icon}/>
            <p className="technology_name">{icon.name}</p>
          </div>
        ))
      }
    </div>
  )
}

export default TechnologyList;