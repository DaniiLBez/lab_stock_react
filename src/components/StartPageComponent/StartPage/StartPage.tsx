import { FC } from 'react'
import { Container } from '@mui/material'
import StartPageHeader from '../StartPageHeader/StartPageHeader.tsx'
import StartPageButtons from '../StartPageButtons/StartPageButtons.tsx'

interface StartPageProps {}

const StartPage: FC<StartPageProps> = () => (
  <Container>
    <StartPageHeader />
    <StartPageButtons />
  </Container>
)

export default StartPage
