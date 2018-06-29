/**
 * Created by syen on 2017/12/25.
 */
import * as types from './mutation-types'
import state from "./states";
import {basicMateQueryInfo} from "./getters";
import common from '../common/js/common'

import axios from 'axios'
axios.defaults.withCredentials=true;

