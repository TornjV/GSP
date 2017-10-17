import { NavigationActions } from 'react-navigation';

const navigate = (routeName) => NavigationActions.navigate({ routeName });

export const actions = {
  navigate,
}
