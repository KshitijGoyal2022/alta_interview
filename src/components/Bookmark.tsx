import {BsBookmark} from 'react-icons/bs'
import {styled} from 'styled-components'

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Bookmark = () => {
  return (
    <RowContainer>
        <BsBookmark/>
        <p>356</p>
    </RowContainer>
  )
}

export default Bookmark