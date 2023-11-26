import { FC } from 'react'
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material'
import { Link } from 'react-router-dom'
import { Home, Settings, Person, TrendingUp } from '@mui/icons-material'

interface NavigationComponentProps {}

const NavigationComponent: FC<NavigationComponentProps> = () => (
  <AppBar position="static">
    <Container>
      <Toolbar>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
          Биржа акций
        </Typography>
        <IconButton color="inherit" component={Link} to="/">
          <Home />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/broker">
          <Person />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/trading">
          <TrendingUp />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/stocks">
          <Settings />
        </IconButton>
      </Toolbar>
    </Container>
  </AppBar>
)

export default NavigationComponent
