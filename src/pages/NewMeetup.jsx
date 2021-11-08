import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
function NewMeetupPage() {
	const history = useHistory();
	function handleSubmit(meetup) {
		fetch(
			'https://react-meetup-b9817-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
			{
				method: 'POST',
				body: JSON.stringify(meetup),
				header: {
					'Content-Type': 'application/json',
				},
			}
		).then(() => {
			history.replace('/');
		});
	}
	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onSubmit={handleSubmit} />
		</section>
	);
}
export default NewMeetupPage;
