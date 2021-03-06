import MeetupItem from './MeetupItem';
import styles from './MeetupList.module.css';

function MeetupList({ meetups }) {
	return (
		<ul className={styles.list}>
			{meetups.map((meetup) => (
				<MeetupItem key={meetup.id} meetup={meetup} />
			))}
		</ul>
	);
}
export default MeetupList;
