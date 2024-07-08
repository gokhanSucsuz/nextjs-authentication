import { getSession } from '@auth0/nextjs-auth0';

export default async function ProfileServer() {
    const response = await getSession();

    return (
        response && (
            <div>
                <img src={response.picture} alt={response.name} />
                <h2>{response.name}</h2>
                <p>{response.email}</p>
            </div>
        )
    );
}