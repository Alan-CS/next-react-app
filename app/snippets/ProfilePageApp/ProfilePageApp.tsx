import React from 'react';
import Heading from './Heading';
import Section from './Section';

interface PostProps {
    title: string;
    body: string;
}

const ProfilePage: React.FC = () => {
    return (
        <Section>
            <Heading>My Profile</Heading>
            <Post
                title="Hello traveller!"
                body="Read about my adventures."
            />
            <AllPosts />
        </Section>
    );
};

const AllPosts: React.FC = () => {
    return (
        <Section>
            <Heading>Posts</Heading>
            <RecentPosts />
        </Section>
    );
};

const RecentPosts: React.FC = () => {
    return (
        <Section>
            <Heading>Recent Posts</Heading>
            <Post
                title="Flavors of Lisbon"
                body="...those pastéis de nata!"
            />
            <Post
                title="Buenos Aires in the rhythm of tango"
                body="I loved it!"
            />
        </Section>
    );
};

const Post: React.FC<PostProps> = ({ title, body }) => {
    return (
        <Section isFancy={true}>
            <Heading>{title}</Heading>
            <p><i>{body}</i></p>
        </Section>
    );
};

export default ProfilePage;
