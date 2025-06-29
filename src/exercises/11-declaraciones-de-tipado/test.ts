
import { typeAssert, IsTypeEqual, ArrayElement } from '../../utils/type-assertions';
import {nameDecorators} from './index';

typeAssert<
    IsTypeEqual<
        ArrayElement<typeof nameDecorators>,
        (input: string) => string
    >
>();
