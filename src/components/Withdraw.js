import { UserContext } from './UserContext'
import { useContext } from 'react'
import { Container, Button } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

const Withdraw = () => {

    const [ctx, setCtx] = useContext(UserContext)

    const { users, currentUser } = ctx

    const withdraw = sum => {
        setCtx({
            ...ctx,
            users: {
                ...ctx.users,
                [currentUser]: {
                    ...ctx.users[currentUser],
                    balance: ctx.users[currentUser].balance -= sum,
                    history: ctx.users[currentUser].history.concat([{ 'withdraw': sum }])
                }
            },
            currentUser: currentUser
        })
    }

    const validationSchema = Yup.object({
        withdraw: Yup.number()
            .max(Object.keys(users).length === 0
                ? 0
                : users[currentUser].balance, 'Nuk mundeni te beni terheqje mbi shumen e depozituar!')
    })

    return (
        <Container className="center">
            <div className="card text-center border-secondary">
                <div className="card-header border-secondary">
                    <h5 className="card-title">TERHEQJE</h5>
                </div>
                {Object.keys(users).length === 0
                    ? <div className="no-account">
                        <Link to="createaccount">Ju lutem krijoni llogarine tuaj </Link> qe te terhiqni mjete financiare.
                    </div>
                    : <div className="card-body">
                        <div className="balance">
                            BILANCI: ${users[currentUser].balance}
                        </div>

                        <Formik
                            initialValues={{
                                withdraw: ''
                            }}
                            validationSchema={validationSchema}
                            validateOnChange={false}
                            validateOnBlur={false}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                withdraw(parseFloat(values.withdraw))
                                setSubmitting(false)
                                resetForm()
                                setTimeout(function () { alert('Terheqja e mjeteve financiare perfundoi me sukses!' ) }, 400)
                            }}>
                            {formik => (
                                <Form>
                                    <label className="field" htmlFor="withdraw">Shuma e terheqjes</label>
                                    <Field
                                        id="withdraw"
                                        name="withdraw"
                                        type="number"
                                        min="1"
                                        autoComplete="current-withdraw"
                                        onChange={formik.handleChange}
                                        value={formik.values.withdraw} />
                                    {formik.errors.withdraw
                                        ? <div className="validation-error">{formik.errors.withdraw}</div>
                                        : null}
                                    <div className="btn-wrapper">
                                        {!formik.values.withdraw
                                            ? <Button variant="outline-dark" type="submit" disabled>Terheqje</Button>
                                            : <Button variant="outline-dark" type="submit">Terheqje</Button>}
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>}
            </div>
        </Container>
    )
}

export default Withdraw