import React from 'dom-chef';
import select from 'select-dom';
import features from '../libs/features';

async function init() {
	const container = select('.get-repo-select-menu');
	if (!container) {
		return false;
	}

	console.log("here");
	const originalDesc = select(".get-repo-select-menu");
	if (originalDesc) {
		originalDesc.remove();
	}

	const styles = {zIndex: 99};
	const cloneForm = (
		<div class="input-group">
			<div class="float-left pr-2" role="search">
				<details class="details-reset details-overlay float-left subnav-search-context" open="">
					<summary class="btn select-menu-button" aria-haspopup="menu">
						SSH
					</summary>
					<details-menu class="select-menu-modal position-absolute py-0 f6 text-gray"
								  style="width:220px; z-index: 99;" role="menu">
						<ul>
							<li>
								<a role="menuitem"
								   href="https://github.com/sindresorhus/refined-github/issues?q=is%3Aopen+sort%3Aupdated-desc"
								   class="select-menu-item">
									Open issues and pull requests
								</a>
							</li>
							<li>
								<a role="menuitem"
								   href="https://github.com/sindresorhus/refined-github/issues?q=is%3Aopen+is%3Aissue+author%3Asnowe2010+sort%3Aupdated-desc"
								   class="select-menu-item">
									Your issues
								</a>
							</li>
							<li>
								<a role="menuitem"
								   href="https://github.com/sindresorhus/refined-github/pulls?q=is%3Aopen+is%3Apr+author%3Asnowe2010+sort%3Aupdated-desc"
								   class="select-menu-item">
									Your pull requests
								</a>
							</li>
							<li>
								<a role="menuitem"
								   href="https://github.com/sindresorhus/refined-github/issues?q=is%3Aopen+assignee%3Asnowe2010+sort%3Aupdated-desc"
								   class="select-menu-item">
									Everything assigned to you
								</a>
							</li>
							<li>
								<a role="menuitem"
								   href="https://github.com/sindresorhus/refined-github/issues?q=is%3Aopen+mentions%3Asnowe2010+sort%3Aupdated-desc"
								   class="select-menu-item">
									Everything mentioning you
								</a>
							</li>
							<li><a href="/sindresorhus/refined-github/issues?q=is%3Aopen+commenter:snowe2010"
								   class="select-menu-item" role="menuitem">Everything commented by you</a></li>
							<li>
								<a role="menuitem" href="https://help.github.com/articles/searching-issues"
								   class="select-menu-item" target="_blank">
									<svg class="octicon octicon-link-external select-menu-item-icon" viewBox="0 0 12 16"
										 version="1.1" width="12" height="16" aria-hidden="true">
										<path fill-rule="evenodd"
											  d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"></path>
									</svg>
									<strong>View advanced search syntax</strong>
								</a>
							</li>
						</ul>
					</details-menu>
				</details>
				<form class="subnav-search float-left" data-pjax="true" role="search" aria-label="Issues"
					  action="/sindresorhus/refined-github/issues" accept-charset="UTF-8" method="get"
					  autocomplete="off"><input name="utf8" type="hidden" value="✓">
					<input type="text" name="q" id="js-issues-search" value="is:issue is:open sort:updated-desc "
						   class="form-control form-control subnav-search-input input-contrast"
						   placeholder="Search all issues" aria-label="Search all issues">
						<svg class="octicon octicon-search subnav-search-icon" viewBox="0 0 16 16" version="1.1"
							 width="16" height="16" aria-hidden="true">
							<path fill-rule="evenodd"
								  d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path>
						</svg>
				</form>
			</div>
			<input type="text" class="form-control input-monospace input-sm" data-autoselect=""
				   value="https://github.com/twbs/bootstrap.git"
				   aria-label="Clone this repository at https://github.com/twbs/bootstrap.git"
				   readonly=""/>
			<div class="input-group-button">
				<clipboard-copy value="https://github.com/twbs/bootstrap.git"
								aria-label="Copy to clipboard" class="btn btn-sm" tabindex="0"
								role="button">
					<svg class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1"
						 width="14" height="16" aria-hidden="true">
						<path fill-rule="evenodd"
							  d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path>
					</svg>
				</clipboard-copy>
			</div>
		</div>
);
const cloneField = (
	<div id="clone-holder" class="file-navigation">
		<div class="input-group">
			<input type="text" class="form-control input-monospace input-sm" data-autoselect=""
				   value="https://github.com/twbs/bootstrap.git"
				   aria-label="Clone this repository at https://github.com/twbs/bootstrap.git"
				   readonly=""/>
			<div class="input-group-button">
				<clipboard-copy value="https://github.com/twbs/bootstrap.git"
								aria-label="Copy to clipboard" class="btn btn-sm" tabindex="0"
								role="button">
					<svg class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1"
						 width="14" height="16" aria-hidden="true">
						<path fill-rule="evenodd"
							  d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path>
					</svg>
				</clipboard-copy>
			</div>
		</div>
	</div>
);
const cloneButton = (
	<div id="clone-holder" class="file-navigation">
		<details
			class="get-repo-select-menu js-get-repo-select-menu position-relative details-overlay details-reset">
			<summary class="btn btn-sm btn-primary">
				Clone or download
				<span class="dropdown-caret"></span>
			</summary>
			<div class="position-relative">
				<div
					class="get-repo-modal dropdown-menu dropdown-menu-sw pb-0 js-toggler-container on js-get-repo-modal">

					<div class="get-repo-modal-options">
						<div class="clone-options https-clone-options">
							<form data-remote="true"
								  action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone"
								  accept-charset="UTF-8" method="post">
								<input name="utf8" type="hidden" value="✓"/>
								<input type="hidden" name="authenticity_token"
									   value="7jBPg2+P41t02Drgh3inGUZXHRAIxVhpdOBjT65jwyUiGwQccmqdcYr+3MbcPfCOjzzA9IVBzImJtZdvu9HpJA=="/>
								<button type="submit"
										class="btn-link btn-change-protocol js-toggler-target float-right">Use SSH
								</button>
							</form>

							<h4 class="mb-1">
								Clone with HTTPS
								<a class="muted-link"
								   href="https://help.github.com/articles/which-remote-url-should-i-use"
								   target="_blank"
								   title="Which remote URL should I use?">
									<svg class="octicon octicon-question" viewBox="0 0 14 16" version="1.1"
										 width="14"
										 height="16" aria-hidden="true">
										<path fill-rule="evenodd"
											  d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"></path>
									</svg>
								</a>
							</h4>
							<p class="mb-2 get-repo-decription-text">
								Use Git or checkout with SVN using the web URL.
							</p>

							<div class="input-group">
								<input type="text" class="form-control input-monospace input-sm" data-autoselect=""
									   value="https://github.com/twbs/bootstrap.git"
									   aria-label="Clone this repository at https://github.com/twbs/bootstrap.git"
									   readonly=""/>
								<div class="input-group-button">
									<clipboard-copy value="https://github.com/twbs/bootstrap.git"
													aria-label="Copy to clipboard" class="btn btn-sm" tabindex="0"
													role="button">
										<svg class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1"
											 width="14" height="16" aria-hidden="true">
											<path fill-rule="evenodd"
												  d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path>
										</svg>
									</clipboard-copy>
								</div>
							</div>

						</div>

						<div class="clone-options ssh-clone-options">
							<form data-remote="true"
								  action="/users/set_protocol?protocol_selector=https&amp;protocol_type=clone"
								  accept-charset="UTF-8" method="post">
								<input name="utf8" type="hidden" value="✓"/>
								<input type="hidden" name="authenticity_token"
									   value="TIB+lv6U/jk0Lc+0AbZRpinhYcRycz6LSkqWMlEk6/KAqzUJ43GAE8oLKZJa8wYx4Iq8IP/3qmu3H2ISRJbB8w=="/>
								<button type="submit"
										class="btn-link btn-change-protocol js-toggler-target float-right">Use HTTPS
								</button>
							</form>

							<h4 class="mb-1">
								Clone with SSH
								<a class="muted-link"
								   href="https://help.github.com/articles/which-remote-url-should-i-use"
								   target="_blank"
								   title="Which remote URL should I use?">
									<svg class="octicon octicon-question" viewBox="0 0 14 16" version="1.1"
										 width="14"
										 height="16" aria-hidden="true">
										<path fill-rule="evenodd"
											  d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"></path>
									</svg>
								</a>
							</h4>
							<p class="mb-2 get-repo-decription-text">
								Use an SSH key and passphrase from account.
							</p>

							<div class="input-group">
								<input type="text" class="form-control input-monospace input-sm" data-autoselect=""
									   value="git@github.com:twbs/bootstrap.git"
									   aria-label="Clone this repository at git@github.com:twbs/bootstrap.git"
									   readonly=""/>
								<div class="input-group-button">
									<clipboard-copy value="git@github.com:twbs/bootstrap.git"
													aria-label="Copy to clipboard" class="btn btn-sm" tabindex="0"
													role="button">
										<svg class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1"
											 width="14" height="16" aria-hidden="true">
											<path fill-rule="evenodd"
												  d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path>
										</svg>
									</clipboard-copy>
								</div>
							</div>

						</div>
						<div class="mt-2">
							<a href="github-windows://openRepo/https://github.com/twbs/bootstrap"
							   class="btn btn-outline get-repo-btn tooltipped tooltipped-s tooltipped-multiline js-get-repo"
							   data-open-app="windows"
							   aria-label="Clone twbs/bootstrap to your computer and use it in GitHub Desktop.">
								Open in Desktop
							</a>

							<a href="/twbs/bootstrap/archive/master.zip" class="btn btn-outline get-repo-btn
        " rel="nofollow" data-ga-click="Repository, download zip, location:repo overview">
								Download ZIP
							</a>

						</div>
					</div>

					<div class="js-modal-download-mac py-2 px-3 d-none">
						<h4 class="lh-condensed mb-3">Launching GitHub Desktop<span
							class="animated-ellipsis-container"><span
							class="animated-ellipsis">...</span></span></h4>
						<p class="text-gray">If nothing happens, <a href="https://desktop.github.com/">download
							GitHub
							Desktop</a> and try again.</p>
						<p>
							<button class="btn-link js-get-repo-modal-download-back">Go back</button>
						</p>
					</div>

					<div class="js-modal-download-windows py-2 px-3 d-none">
						<h4 class="lh-condensed mb-3">Launching GitHub Desktop<span
							class="animated-ellipsis-container"><span
							class="animated-ellipsis">...</span></span></h4>
						<p class="text-gray">If nothing happens, <a href="https://desktop.github.com/">download
							GitHub
							Desktop</a> and try again.</p>
						<p>
							<button class="btn-link js-get-repo-modal-download-back">Go back</button>
						</p>
					</div>

					<div class="js-modal-download-xcode py-2 px-3 d-none">
						<h4 class="lh-condensed mb-3">Launching Xcode<span class="animated-ellipsis-container"><span
							class="animated-ellipsis">...</span></span></h4>
						<p class="text-gray">If nothing happens, <a href="https://developer.apple.com/xcode/">download
							Xcode</a> and try again.</p>
						<p>
							<button class="btn-link js-get-repo-modal-download-back">Go back</button>
						</p>
					</div>

					<div class="js-modal-download-visual-studio py-2 px-3 d-none">
						<h4 class="lh-condensed mb-3">Launching Visual Studio<span
							class="animated-ellipsis-container"><span class="animated-ellipsis">...</span></span>
						</h4>
						<p class="text-gray">If nothing happens, <a href="https://visualstudio.github.com/">download
							the
							GitHub extension for Visual Studio</a> and try again.</p>
						<p>
							<button class="btn-link js-get-repo-modal-download-back">Go back</button>
						</p>
					</div>

				</div>
			</div>
		</details>
	</div>
);
const reponav = select('.reponav');
reponav.appendChild(cloneForm);
}

features.add({
	id: 'move-clone-button',
	load: features.onAjaxedPages,
	init
});
