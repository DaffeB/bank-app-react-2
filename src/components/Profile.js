import { UserContext } from './UserContext'
import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'

const Profile = () => {

    const users = useContext(UserContext)[0].users

    const { username } = useParams()

    return (
        <Container className="center">
            {!users[username]
                ? <div>Perdoruesi {username} nuk ekziston.</div>
                : <div className="card border-secondary text-center">
                    <div className="card-header border-secondary">
                        <h5 className="card-title">Operations of {username}</h5>
                    </div>
                    <div className="card-body">
                        {users[username].history.length === 0
                            ? <p className="card-text">No user activity yet.</p>
                            : <table className="table" verticalalign='middle'>
                                <thead>
                                    <tr>
                                        <th scope="col">Operation</th>
                                        <th scope="col">Shuma, $</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users[username].history.map((item, index) => (
                                        <tr key={index}>
                                            {Object.keys(item)[0] === 'deposit'
                                                ? <td>Deposit</td>
                                                : <td>Terheqje</td>
                                            }
                                            <td>{Object.values(item)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>BILNACI</th>
                                        <th>{users[username].balance}</th>
                                    </tr>
                                </tfoot>
                            </table>
                        }
                    </div>
                </div>
            }
        </Container >
    )
}

export default Profile