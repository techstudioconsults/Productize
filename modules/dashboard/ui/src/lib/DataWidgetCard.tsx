import { Box, Card, CardBody,Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { SpinnerComponentSmall } from '@productize-v1.0.0/modules/shared/ui';

import { ReactNode } from 'react';

interface cardProps {
	title: string;
	value: string | number | ReactNode;
	bgImg?: string;
	showIcon: boolean;
	bmt?: number;
	tmy?: number;
}

export const DataWidgetCard = ({
	title,
	value,
	bgImg,
	showIcon,
	bmt,
	tmy,
}: cardProps) => {
	return (
		<Card
			borderRadius={`8px`}
			// border={`1px solid #F3F3F3`}
			variant={`outline`}
			bgImage={bgImg}
			bgPosition={`right`}
			bgSize={`cover`}
			bgRepeat={`no-repeat`}
		>
			<CardBody>
				<Box display={showIcon ? `block` : `none`} fontSize={`32px`}>
					<Icon icon={`mdi:naira`} />
				</Box>
				<Box mt={bmt}>
					<Text>{title}</Text>
					<Text my={tmy} as={`h5`}>
						{value ? value : <SpinnerComponentSmall size="sm" />}
					</Text>
				</Box>
			</CardBody>
		</Card>
	);
};
