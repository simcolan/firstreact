import React from 'react';
import "./UtenteComponent.css"

export const UtenteComponent = ({ state, loginUtente, onChange }) => {
    return (
        <>
            <body>
                <div class="contaneir-fluid bg">
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-xs-12"></div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div>
                            {/* form start */}
                                <div class="form-group">
                                    <label>Username:</label>
                                    <input type="username"
                                        class="form-control"
                                        name="username"
                                        value={state?.username}
                                        onChange={(e) => onChange(e)}
                                        placeholder="Username" />
                                </div>
                                <div class="form-group">
                                    <label>Password:</label>
                                    <input type="password"
                                        class="form-control"
                                        name="password"
                                        value={state?.password}
                                        onChange={(e) => onChange(e)}
                                        placeholder="Password" />
                                </div>
                                <button class="btn btn-dark" onClick={() => loginUtente()}>Login</button>
                            </div>
                        </div>

                        {/* form end */}

                        <div class="col-md-4 col-sm-4 col-xs-12"></div>
                    </div>
                </div>
            </body>
        </>
    )
}