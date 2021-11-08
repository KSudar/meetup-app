import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import _ from 'lodash';

function AllMeetupsPage() {
	const [meetups, setMeetups] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setIsLoading(true);
		fetch(
			'https://react-meetup-b9817-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const meetups = _.map(data, (value, key) => {
					return {
						id: key,
						...value,
					};
				});
				setMeetups(meetups);
				setIsLoading(false);
			});
		return () => {
			setMeetups([]);
			setIsLoading(false);
		};
	}, []);

	return (
		<section>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					<h1>All Meetups</h1>
					<MeetupList meetups={meetups} />
				</>
			)}
		</section>
	);
}
export default AllMeetupsPage;
