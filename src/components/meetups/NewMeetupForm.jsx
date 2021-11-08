import { useRef } from 'react';
import styles from './NewMeetupForm.module.css';
import Card from '../ui/Card';

function NewMeetupForm({ onSubmit }) {
	const titleRef = useRef();
	const imageRef = useRef();
	const addressRef = useRef();
	const descriptionRef = useRef();

	function handleSubmit(event) {
		event.preventDefault();
		const meetup = {
			title: titleRef.current.value,
			image: imageRef.current.value,
			address: addressRef.current.value,
			description: descriptionRef.current.value,
		};
		onSubmit(meetup);
	}

	return (
		<Card>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.control}>
					<label htmlFor='title'>Meetup Title</label>
					<input type='text' id='title' ref={titleRef} required />
				</div>
				<div className={styles.control}>
					<label htmlFor='image'>Meetup image</label>
					<input type='url' id='image' ref={imageRef} required />
				</div>
				<div className={styles.control}>
					<label htmlFor='address'>Address</label>
					<input type='text' id='address' ref={addressRef} required />
				</div>
				<div className={styles.control}>
					<label htmlFor='description'>Description</label>
					<textarea id='description' rows='5' ref={descriptionRef} required />
				</div>
				<div className={styles.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
}
export default NewMeetupForm;
