import { BookmarkIcon, HeartIcon, PlusIcon } from '@heroicons/react/24/solid'
import { HomeIcon } from '@heroicons/react/24/solid'
import {Navlink} from 'react-router-dom'

const BottomNavigation = () => {
  return (
    <div>
        <Navlink to="/recipes">
            <HomeIcon className="size-[24px]" />
        </Navlink>
        <Navlink to="/recipes">
            <BookmarkIcon className="size-[24px]" />
        </Navlink>
        <Navlink to="/recipes">
            <HeartIcon className="size-[24px]" />
        </Navlink>
        <Navlink to="/recipes">
            <PlusIcon className="size-[24px]" />
        </Navlink>
    </div>
  )
}

export default BottomNavigation