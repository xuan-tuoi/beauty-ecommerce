import { useStore } from '@/store'
import { AxiosRequestConfig } from 'axios'

// eslint-disable-next-line import/no-named-as-default
import configApi from './client'

export class ApiService {
	config: AxiosRequestConfig = {}

	private controller = new AbortController()

	static createInstance(): ApiService {
		const activeInstance = new ApiService()

		activeInstance.controller = new AbortController()

		return activeInstance
	}

	cancelRequest() {
		this.controller.abort()
	}

	// // Sử dụng useAuthStore để lấy giá trị authToken từ store
	// private userId = JSON.parse(localStorage.getItem('data') || '{}')?.user?.id
	// private accessToken = JSON.parse(localStorage.getItem('data') || '{}')?.token
	// 	?.accessToken

	// private re_token = JSON.parse(localStorage.getItem('data') || '{}')?.token
	// 	?.refreshToken

	private getAccessToken = () => {
		const { AuthSlice } = useStore()
		return AuthSlice.accessToken
	}

	private getRefreshToken = () => {
		const { AuthSlice } = useStore()
		return AuthSlice.refreshToken
	}

	private getXClientId = () => {
		const { AuthSlice } = useStore()
		return AuthSlice.xClientId
	}

	login = configApi({
		path: 'v1/auth/login',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	})

	logout = configApi({
		path: 'v1/auth/logout',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Client-Id': this.getXClientId(),
			Authorization: this.getAccessToken()
		}
	})

	signup = configApi({
		path: 'v1/auth/signup',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	})

	refreshToken = configApi({
		path: 'v1/auth/refresh-token',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Client-Id': this.getXClientId(),
			'X-Rtoken-Id': this.getRefreshToken()
		}
	})

	createProduct = configApi({
		path: 'v1/products',
		method: 'PUT',
		headers: {
			'Content-Type': 'multipart/form-data',
			Accept: 'application/json',
			type: 'formData'
		}
	})

	getProductByPage = configApi({
		path: 'v1/products/search',
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})

	getProductById = configApi({
		path: 'v1/products',
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})

	getSimilarProduct = configApi({
		path: 'v1/products/similar-product',
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})

	addToCart = configApi({
		path: 'v1/carts',
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		}
	})

	getCartByUserId = configApi({
		path: 'v1/carts',
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
}
