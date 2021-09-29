import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://images.unsplash.com/photo-1626131719162-a086b0cdd644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1193&q=80",
    address: "Some address 5, 12345 Some City",
    description: "This is a first Meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://images.unsplash.com/photo-1632597470004-39344745a70d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    address: "Some address 6, 123456 Some City",
    description: "This is a second Meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
