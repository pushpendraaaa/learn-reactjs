import React from "react";
import { ChannelContext, UserContext } from "../../App";

function ComponentF() {
	return (
		<div>
			<UserContext.Consumer>
				{(userName) => {
					return (
						<ChannelContext.Consumer>
							{(channelName) => {
								return (
									<div>
										User context value - {userName}, channel context
										value - {channelName}
									</div>
								);
							}}
						</ChannelContext.Consumer>
					);
				}}
			</UserContext.Consumer>
		</div>
	);
}

export default ComponentF;
