import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';
function FavoritesPage() {
	const favoritesContext = useContext(FavoritesContext);
	let content;

	if (!favoritesContext.totalFavorites) {
		content = <p>You got no favorites yet. Start adding some?</p>;
	} else {
		content = <MeetupList meetups={favoritesContext.favorites} />;
	}
	return (
		<section>
			<h1>My Favorites</h1>
			{content}
		</section>
	);
}
export default FavoritesPage;
