package api;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

/**
 * Serves the React entry point for client-side routes on a hard refresh.
 */
public class SpaFallbackFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        String path = httpRequest.getRequestURI().substring(httpRequest.getContextPath().length());

        if (isClientRoute(httpRequest, path)) {
            httpRequest.getRequestDispatcher("/index.html").forward(httpRequest, httpResponse);
            return;
        }

        chain.doFilter(request, response);
    }

    private boolean isClientRoute(HttpServletRequest request, String path) throws IOException {
        return "GET".equalsIgnoreCase(request.getMethod())
                && !path.equals("/api")
                && !path.startsWith("/api/")
                && !path.contains(".")
                && request.getServletContext().getResource(path) == null;
    }
}
