<template>
	<main class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
		<nuxt-link class="block cursor-pointer" href="/">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="inline h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M11 17l-5-5m0 0l5-5m-5 5h12"
				/>
			</svg>
			Back
		</nuxt-link>
		<div class="mx-auto max-w-lg lg:max-w-7xl">
			<div class="border-b border-b-gray-200 pb-6">
				<h2
					class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
				>
					Recent Posts
				</h2>
			</div>
			<div class="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-y-12">
				<ContentList path="/blog" v-slot="{ list }">
					<div
						v-for="article in list"
						:key="article._path"
						class="flex flex-col justify-between rounded-lg border border-gray-200 p-4"
					>
						<nuxt-link :href="article._path">
							<p class="text-xl text-gray-900">
								{{ article.title }}
							</p>
							<p class="mt-3 text-gray-500">
								{{ article.description }}
							</p>
						</nuxt-link>
						<div class="mt-6">
							<a
								:href="`?author=${article.author}`"
								class="text-sm font-medium text-gray-900"
							>
								{{ article.author }}
							</a>
							<div class="text-sm.text-gray-900">
								<time datetime="2020-03-16">
									{{ article.date }}
								</time>
							</div>
						</div>
					</div>
				</ContentList>
			</div>
		</div>
	</main>
</template>
