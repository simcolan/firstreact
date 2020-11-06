import React from 'react';
import style from "./UtenteComponent.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const UtenteComponent = ({ state, loginUtente, onChange }) => {
    return (
		<>

			<div className={style.container}>
				<div className={style.h100}>
					<div className={style.card}>
						<div className={style.card_header}>
							<h3><strong>Login</strong></h3>
							<div className={style.social_icon}>
								<span>
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-suit-club-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.5 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
										<path d="M8 9a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm7 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
										<path d="M5.602 14.153c.5-.758 1.224-1.98 1.83-3.498.187-.467.949-.467 1.136 0a19.816 19.816 0 0 0 1.83 3.498c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847z" />
										<path d="M7 7h2v4H7V7z" />
									</svg>
								</span>
								<span>
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-suit-diamond-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path d="M2.45 7.4L7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
									</svg>
								</span>
								<span>
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-suit-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
									</svg>
								</span>
								<span>
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-suit-spade-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path d="M5.602 14.153C6.272 13.136 7.348 11.28 8 9c.652 2.28 1.727 4.136 2.398 5.153.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847z" />
										<path d="M4.5 12.5A3.5 3.5 0 0 0 8 9a3.5 3.5 0 1 0 7 0c0-3-4-4-7-9-3 5-7 6-7 9a3.5 3.5 0 0 0 3.5 3.5z" />
									</svg>
								</span>
							</div>
						</div>
						<div className="card-body">
							<div>
								<div className="input-group form-group">
									<div className={style.input_group_prepend}>
										<span className="input-group-text">
											<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
												<path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z" />
											</svg>
										</span>
									</div>
									<input type="username"
										className="form-control"
										name="username"
										value={state?.username}
										onChange={(e) => onChange(e)}
										placeholder="Username" />
								</div> *
					 <div className="input-group form-group">
									<div className={style.input_group_prepend}>
										<span className="input-group-text">
											<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
												<path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z" />
											</svg>
										</span>
									</div>
									<input type="password"
										className="form-control"
										name="password"
										value={state?.password}
										onChange={(e) => onChange(e)}
										placeholder="Password" />
								</div>
								<div className="form-group">
									<button className={`btn ${style.login_btn}`} onClick={() => loginUtente()}>Login</button>
								</div>
							</div>
						</div>
						<div className="card-footer">
							<div className={`d-flex ${style.links}`}>
								Don't have an account?<a>Sign Up</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>


        //       <body>
        //         <div className="contaneir-fluid bg">
        //             <div className="row">
        //                 <div className="col-md-4 col-sm-4 col-xs-12"></div>
        //                 <div className="col-md-4 col-sm-4 col-xs-12">
        //                     <div>
        //                         <div className="form-group">
        //                             <label>Username:</label>
        //                             <input type="username"
        //                                 className="form-control"
        //                                 name="username"
        //                                 value={state?.username}
        //                                 onChange={(e) => onChange(e)}
        //                                 placeholder="Username" />
        //                         </div>
        //                         <div className="form-group">
        //                             <label>Password:</label>
        //                             <input type="password"
        //                                 className="form-control"
        //                                 name="password"
        //                                 value={state?.password}
        //                                 onChange={(e) => onChange(e)}
        //                                 placeholder="Password" />
        //                         </div>
        //                         <button className="btn btn-dark" onClick={() => loginUtente()}>Login</button>
        //                     </div>
        //                 </div>
        //                 <div className="col-md-4 col-sm-4 col-xs-12"></div>
        //             </div>
        //         </div>
        //     </body> 
        // </> 

    )
}