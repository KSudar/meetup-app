import { useContext } from 'react';
import styles from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem({ meetup }) {
	const favoritesContext = useContext(FavoritesContext);
	const isFavorite = favoritesContext.isFavorite(meetup.id);
	function handleToggleFavorite() {
		isFavorite
			? favoritesContext.removeFavorite(meetup.id)
			: favoritesContext.addFavorite(meetup);
	}

	return (
		<li className={styles.item}>
			<Card>
				<div
					className={styles.image}
					style={{ backgroundImage: `url(${meetup.image})` }}
				></div>
				<div className={styles.content}>
					<h3>{meetup.title}</h3>
					<address>{meetup.address}</address>
					<p>{meetup.description}</p>
				</div>
				<div className={styles.actions}>
					<button onClick={handleToggleFavorite}>
						{isFavorite ? 'Remove From Favorites' : 'To Favorites'}
					</button>
				</div>
			</Card>
		</li>
	);
}
export default MeetupItem;
