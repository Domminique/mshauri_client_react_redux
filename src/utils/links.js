import { IoBarChartSharp } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'

const links = [
  { id: 1, text: 'stats', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, text: 'all mentors', path: 'all-jobs', icon: <MdQueryStats /> },
  { id: 3, text: 'add mentor', path: 'add-job', icon: <FaWpforms /> },
  { id: 4, text: 'upload mentees', path: 'profile', icon: <ImProfile /> },
  { id: 4, text: 'program', path: 'profile', icon: <ImProfile /> },
]

export default links
