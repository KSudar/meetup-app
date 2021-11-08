import { createContext, useState, useEffect } from 'react';

const FavoritesContext = createContext({
	favorites: [],
	totalFavorites: 0,
	addFavorite: (meetup) => {},
	removeFavorite: (meetupId) => {},
	isFavorite: (meetupId) => {},
});

export function FavoritesContextProvider({ children }) {
	const [userFavorites, setUserFavorites] = useState([]);

	useEffect(() => {
		localStorage.getItem('favorites') == null
			? localStorage.setItem('favorites', JSON.stringify([]))
			: setUserFavorites(JSON.parse(localStorage.getItem('favorites')));
	}, []);

	function handleAdd(meetup) {
		setUserFavorites((currentUserFavorites) => {
			const updatedArray = [...currentUserFavorites, meetup];
			localStorage.setItem('favorites', JSON.stringify(updatedArray));
			return updatedArray;
		});
	}

	function handleRemove(meetupId) {
		setUserFavorites((currentUserFavorites) => {
			const updatedArray = currentUserFavorites.filter(
				(meetup) => meetup.id !== meetupId
			);
			localStorage.setItem('favorites', JSON.stringify(updatedArray));

			return updatedArray;
		});
	}

	function isFavorite(meetupId) {
		return userFavorites.some((meetup) => meetup.id === meetupId);
	}

	const context = {
		favorites: userFavorites,
		totalFavorites: userFavorites.length,
		addFavorite: handleAdd,
		removeFavorite: handleRemove,
		isFavorite: isFavorite,
	};
	return (
		<FavoritesContext.Provider value={context}>
			{children}
		</FavoritesContext.Provider>
	);
}

export default FavoritesContext;
