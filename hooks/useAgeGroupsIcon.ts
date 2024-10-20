import { useState, useEffect } from 'react';

const useAgeGroupsIcon = () => {
    const [ageGroupsIcon, setAgeGroups] = useState([
        require('@/assets/icons/child-06.png'),
        require('@/assets/icons/child-612.png'),
        require('@/assets/icons/child-12.png'),
        require('@/assets/icons/child-23.png'),
        require('@/assets/icons/child-45.png'),
        require('@/assets/icons/child-6.png'),
        require('@/assets/icons/reset.png'),
    ]);
      
  return {
    ageGroupsIcon
  };
};

export default useAgeGroupsIcon;